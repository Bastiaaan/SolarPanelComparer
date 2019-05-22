namespace Webshop.Data.Framework
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using AutoMapper;
    using Webshop.Data.Models;
    using Webshop.Data.ViewModels;

    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            var assembly = typeof(AutoMapperProfile).GetTypeInfo().Assembly;
            var types = assembly.GetExportedTypes();
            this.LoadStandardMappings(types);
            //this.LoadManyToManyMappings();
        }

        private void LoadStandardMappings(IEnumerable<Type> types)
        {
            var maps = (from t in types
                        from i in t.GetInterfaces()
                        where i.GetTypeInfo().IsGenericType && i.GetGenericTypeDefinition() == typeof(IMapFrom<>) &&
                            !t.GetTypeInfo().IsAbstract &&
                            !t.GetTypeInfo().IsInterface
                        select new
                        {
                            Source = i.GetGenericArguments()[0],
                            Destination = t
                        }).ToArray();

            foreach(var map in maps)
            {     
                this.CreateMap(map.Source, map.Destination);
            }
        }

        private void LoadManyToManyMappings(IEnumerable<Type> types)
        {
            // TODO: 
            var properties = (from t in types
                              from i in t.GetProperties()
                              where i.GetType() == typeof(ICollection<>) select t).ToArray();
        }
    }
}
