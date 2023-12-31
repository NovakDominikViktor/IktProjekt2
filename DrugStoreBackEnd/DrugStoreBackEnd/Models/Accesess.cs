﻿using System;
using System.Collections.Generic;

namespace DrugStoreBackEnd.Models;

public partial class Accesess
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
