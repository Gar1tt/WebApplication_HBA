using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication_HBA.Data;
using WebApplication_HBA.Models;
using WebApplication_HBA.DTOs;

namespace WebApplication_HBA.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TodosController : ControllerBase
{
    private readonly AppDbContext _context;

    public TodosController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Todo>>> GetTodos()
    {
        var todos = await _context.Todos
            .Select(todo => new TodoResponseDto
            {
                Id = todo.Id,
                Title = todo.Title,
                Description = todo.Description,
                IsCompleted = todo.IsCompleted,
                CreatedAt = todo.CreatedAt,
                UpdateAt = todo.UpdatedAt

            })
            .ToListAsync();

        return Ok(todos);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TodoResponseDto>> GetTodo(int id)
    {
        var todo = await _context.Todos.FindAsync(id);

        if (todo == null)
        {
            return NotFound();
        }

        var response = new TodoResponseDto
        {
            Id = todo.Id,
            Title = todo.Title,
            Description = todo.Description,
            IsCompleted = todo.IsCompleted,
            CreatedAt = todo.CreatedAt,
            UpdateAt = todo.UpdatedAt
        };

        return Ok(response);
    }
    
    [HttpPost]
    public async Task<ActionResult<TodoResponseDto>> CreateTodo(TodoCreateDto dto)
    {

        var todo = new Todo
        {
            Title = dto.Title,
            Description = dto.Description,
            IsCompleted = false,
            CreatedAt = DateTime.UtcNow
        };

        _context.Todos.Add(todo);
        await _context.SaveChangesAsync();

        var response = new TodoResponseDto
        {
            Id = todo.Id,
            Title = todo.Title,
            Description = todo.Description,
            IsCompleted = todo.IsCompleted,
            CreatedAt = todo.CreatedAt,
            UpdateAt = todo.UpdatedAt
        };

        return CreatedAtAction(nameof(GetTodos), new { id = todo.Id }, response);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTodo(int id, TodoUpdateDto dto)
    {
        var existingTodo = await _context.Todos.FindAsync(id);

        if (existingTodo == null)
        {
            return NotFound();
        }

        existingTodo.Title = dto.Title;
        existingTodo.Description = dto.Description;
        existingTodo.IsCompleted = dto.IsCompleted;
        existingTodo.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTodo(int id)
    {
        var todo = await _context.Todos.FindAsync(id);

        if (todo == null)
        {
            return NotFound();
        }

        _context.Todos.Remove(todo);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}