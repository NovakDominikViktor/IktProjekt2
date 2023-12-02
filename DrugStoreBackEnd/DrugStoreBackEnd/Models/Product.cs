using System;
using System.Collections.Generic;

namespace DrugStoreBackEnd.Models;

public partial class Product
{
    public Guid Id { get; set; }

    public string ProductName { get; set; } = null!;

    public string ProductBrand { get; set; } = null!;

    public string Instructions { get; set; } = null!;

    public int AccessId { get; set; }

    public decimal Price { get; set; }

    public DateTime CreatedTime { get; set; }

    public virtual Accesess Access { get; set; } = null!;
}
