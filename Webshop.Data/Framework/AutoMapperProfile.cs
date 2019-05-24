namespace Webshop.Data.Framework
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using AutoMapper;

    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            var assembly = typeof(AutoMapperProfile).GetTypeInfo().Assembly;
            var types = assembly.GetExportedTypes();
            this.LoadStandardMappings(types);
            this.LoadManyToManyMappings(types);
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
            // TODO: Obtain all entities and when two entities has the same ICollection<mtm> property. 
            var entities = (from t in types
                              from i in t.GetInterfaces()
                              where i.GetTypeInfo().IsGenericType && i.GetGenericTypeDefinition() == typeof(IMapFrom<>) select t).ToArray();
            var targetedEntities = new List<Type>();
            for(int i = 0; i < entities.Length; i++)
            {
                var entity = entities[i];
                var currentProps = entity.GetProperties();
                for(int j = 0; j < currentProps.Length; j++)
                {
                    var currProp = currentProps[j];
                    var matches = typeof(ICollection<>);
                    if (currProp == typeof(ICollection<>))
                    {
                        targetedEntities.Add(entity);
                        break;
                    }
                }
            }
            
            return;
        }
    }
}
