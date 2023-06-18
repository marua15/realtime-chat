using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using System.Collections.Generic;
using ChatService;
using System.Linq;
using System;
using ChatService.Observer;

namespace ChatService.Hubs
{
    public class ChatHub : Hub
    {
        private readonly string _botUser;
        private readonly IDictionary<string, UserConnection> _connections;
        private readonly List<IChatObserver> _chatObservers;


        public ChatHub(IDictionary<string, UserConnection> connections)
        {
            _botUser = "MyChat Bot";            
            _connections = connections;
            _chatObservers = new List<IChatObserver>();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            if (_connections.TryGetValue(Context.ConnectionId, out UserConnection userConnection))
            {
                 _connections.Remove(Context.ConnectionId);
                 Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _botUser, $"{userConnection.User} has left");
                 SendUsersConnected(userConnection.Room);

                _connections.Remove(Context.ConnectionId);
                NotifyUserLeft(userConnection.Room, userConnection.User);
                SendUsersConnected(userConnection.Room);
            }

            return base.OnDisconnectedAsync(exception);
        }

        public async Task JoinRoom(UserConnection userConnection)
        {
             await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room);

             _connections[Context.ConnectionId] = userConnection;

             await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _botUser, $"{userConnection.User} has joined {userConnection.Room}");

             await SendUsersConnected(userConnection.Room);

            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room);

            _connections[Context.ConnectionId] = userConnection;

            NotifyUserJoined(userConnection.Room, userConnection.User);

            await SendUsersConnected(userConnection.Room);
        }

        public async Task SendMessage(string message)
        {
            if (_connections.TryGetValue(Context.ConnectionId, out UserConnection userConnection))
            {
                await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", userConnection.User, message);

                NotifyMessageReceived(userConnection.Room, userConnection.User, message);
                await Clients.Caller.SendAsync("ReceiveNotification", userConnection.User, message);
               // await Clients.All.SendAsync("ReceiveNotification", notification);

            }
        }

        public Task SendUsersConnected(string room)
        {
            var users = _connections.Values
                .Where(c => c.Room == room)
                .Select(c => c.User);

            return Clients.Group(room).SendAsync("UsersInRoom", users);
        }


        // Observer-related methods

        public void AttachObserver(IChatObserver observer)
        {
            _chatObservers.Add(observer);
        }

        public void DetachObserver(IChatObserver observer)
        {
            _chatObservers.Remove(observer);
        }

        private void NotifyUserJoined(string room, string user)
        {
            foreach (var observer in _chatObservers)
            {
                observer.UpdateUserJoined(room, user);
            }
        }

        private void NotifyUserLeft(string room, string user)
        {
            foreach (var observer in _chatObservers)
            {
                observer.UpdateUserLeft(room, user);
            }
        }

        private void NotifyMessageReceived(string room, string user, string message)
        {
            foreach (var observer in _chatObservers)
            {
                observer.UpdateMessageReceived(room, user, message);
            }
        }
    }
}
