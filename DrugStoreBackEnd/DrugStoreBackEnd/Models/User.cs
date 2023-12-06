using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DrugStoreBackEnd.Models;

public partial class User
{
    public int Id { get; set; }

    public string UserName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string PasswordHash { get; set; } = null!;

    public int AccessId { get; set; }

    [JsonIgnore]
    public virtual Accesess Access { get; set; } = null!;

}
