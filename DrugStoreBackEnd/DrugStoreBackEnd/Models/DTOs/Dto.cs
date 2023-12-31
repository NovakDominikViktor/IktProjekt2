﻿namespace DrugStoreBackEnd.Models.DTOs
{
    public record ProductDto(Guid Id, string ProductName, string ProductBrand, string Instructions, int AccessId, decimal Price,DateTime CreatedTime, string ImageUrl);

    public record CreatedProductDto(string ProductName, string ProductBrand, string Instructions, int AccessId, decimal Price, string ImageUrl);

    public record UpdateProductDto(string ProductName, string ProductBrand, string Instructions, int AccessId, decimal Price, string ImageUrl);

    public record AccessDto(int Id, string Name, string Description);

    public record CreatedAccessDto(int Id, string Name, string Description);

    public record UpdateAccessDto(int Id, string Name, string Description);

    public record UserDto(int Id, string UserName, string Email, string PasswordHash, int AccessId);

    public record CreateUserDto(string UserName, string Email, string PasswordHash, int AccessId);

    public record UpdateUserDto(int Id, string UserName, string Email, string PasswordHash, int AccessId);
}
