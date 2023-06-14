
namespace ChatService
{
    public interface IChatService
    {
        void UpdateUserJoined(string room, string user);
        void UpdateUserLeft(string room, string user);
        void UpdateMessageReceived(string room, string user, string message);
    }
}
