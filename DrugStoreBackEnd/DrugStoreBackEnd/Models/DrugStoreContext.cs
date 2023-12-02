using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DrugStoreBackEnd.Models;

public partial class DrugStoreContext : DbContext
{
    public DrugStoreContext()
    {
    }

    public DrugStoreContext(DbContextOptions<DrugStoreContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Accesess> Accesesses { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("SERVER=localhost;PORT=3306;DATABASE=DrugStore;USER=root;PASSWORD=;SSL MODE=none;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Accesess>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("accesess");

            entity.Property(e => e.Id).HasColumnType("int(11)");
            entity.Property(e => e.Description).HasMaxLength(60);
            entity.Property(e => e.Name).HasMaxLength(60);
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("products");

            entity.HasIndex(e => e.AccessId, "fk_access_id");

            entity.Property(e => e.AccessId).HasColumnType("int(11)");
            entity.Property(e => e.Company).HasMaxLength(60);
            entity.Property(e => e.CreatedTime)
                .HasDefaultValueSql("'current_timestamp()'")
                .HasColumnType("timestamp");
            entity.Property(e => e.Instructions).HasMaxLength(90);
            entity.Property(e => e.Price).HasPrecision(10);
            entity.Property(e => e.ProductBrand).HasMaxLength(60);
            entity.Property(e => e.ProductName).HasMaxLength(60);

            entity.HasOne(d => d.Access).WithMany(p => p.Products)
                .HasForeignKey(d => d.AccessId)
                .HasConstraintName("fk_access_id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
