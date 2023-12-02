namespace DrugStoreBackEnd.Models
{
    public class ResponeResult
    {
        public object Result { get; set; }
        public bool IsSuccess { get; set; } = false;
        public string Message { get; set; } = "";
    }
}
