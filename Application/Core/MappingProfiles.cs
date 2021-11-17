using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            //where map from & where map to
            CreateMap<Activity, Activity>();
        }
    }
}