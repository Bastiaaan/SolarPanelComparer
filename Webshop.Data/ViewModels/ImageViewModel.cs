using System;
using System.Collections.Generic;
using System.Text;
using Webshop.Data.Framework;
using Webshop.Data.Models;
using Webshop.Data.Models.Enums;

namespace Webshop.Data.ViewModels
{
    public class ImageViewModel : IMapFrom<Image>
    {
        public int Id { get; set; }

        public byte[] ImageData { get; set; }

        public string FileName { get; set; }

        public int ImageSize { get; set; }

        public string MimeType { get; set; }

        public ImageType ImageType { get; set; }
    }
}
