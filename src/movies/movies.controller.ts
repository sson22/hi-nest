import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

//Controls the entrypoint => localhost:3000/movies
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie with id:${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will remove movie with id: ${movieId}`;
  }

  @Patch('/:id')
  update(@Param('id') movieId: string) {
    return `This will update movie with id: ${movieId}`;
  }
}
