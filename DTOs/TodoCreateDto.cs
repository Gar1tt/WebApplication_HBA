using System.ComponentModel.DataAnnotations;

namespace WebApplication_HBA.DTOs
{
    public class TodoCreateDto
    {
        [Required]
        [MaxLength(100)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(500)]
        public string? Description { get; set; }
    }
}
