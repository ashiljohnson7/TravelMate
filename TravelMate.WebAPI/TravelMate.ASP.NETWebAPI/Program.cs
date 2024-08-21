using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TravelMate.BuisnessLayer.Implementations;
using TravelMate.BuisnessLayer.Interfaces;
using TravelMate.DataAcessLayer.DatabaseFactory;
using TravelMate.DataAcessLayer.Repository;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Register the DBConnectionFactory
builder.Services.AddSingleton<IDBConnectionFactory>(provider =>
    new DBConnectionFactory(builder.Configuration.GetConnectionString("DefaultConnection")));

// Register your repositories and services
builder.Services.AddScoped<HomeRepository>();
builder.Services.AddScoped<IHomeService, HomeService>();

// Configure Swagger/OpenAPI if you want to use it for testing
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();

