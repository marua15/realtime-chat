
namespace ChatService.Observer
{
    public interface IChatObserver
    {
        void UpdateUserJoined(string room, string user);
        void UpdateUserLeft(string room, string user);
        void UpdateMessageReceived(string room, string user, string message);
    }
}
