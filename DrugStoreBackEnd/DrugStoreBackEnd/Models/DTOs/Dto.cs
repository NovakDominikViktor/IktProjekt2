namespace DrugStoreBackEnd.Models.DTOs
{
    public record ProductDto(Guid Id, string ProductName, string ProductBrand, string Instructions, string Company, int AccessId, decimal Price,DateTime CreatedTime);

    public record CreatedProductDto(string ProductName, string ProductBrand, string Instructions, string Company, int AccessId, decimal Price);

    public record UpdateProductDto(string ProductName, string ProductBrand, string Instructions, string Company, int AccessId, decimal Price);

    public record AccessDto(int Id, string Name, string Description);

    public record CreatedAccessDto(string Name, string Description);

    public record UpdateAccessDtp(string Name, string Description);
}
