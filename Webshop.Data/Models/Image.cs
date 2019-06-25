namespace Webshop.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;
    using Webshop.Data.Framework;
    using Webshop.Data.Models;
    using Webshop.Data.Models.Enums;
    using Webshop.Data.ViewModels;

    [Table("Image")]
    public class Image : BaseModel
    {
        public byte[] ImageData { get; set; }

        public string FileName { get; set; }

        public int ImageSize { get; set; }

        public string MimeType { get; set; }

        public ImageType ImageType { get; set; }
    }
}
