namespace Webshop.Data
{
    using System;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Webshop.Data.Services;
    public class Program
    {
        static void Main(string[] args)
        {
            var ServiceProvider = new ServiceCollection()
                .AddTransient<ServiceBase, ProductService>();
            Console.WriteLine("Hello World!");
            Console.ReadLine();
        }
    }
}
