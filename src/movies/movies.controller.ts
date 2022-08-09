import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

//Controls the entrypoint => localhost:3000/movies
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: number) {
    return `We are searching for a movie with year after ${searchingYear}`;
  }
  @Get(':id')
  getOne(@Param('id') movieId: number) {
    const movie = this.moviesService.getOne(movieId);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${movieId} not found.`);
    }
    return movie;
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  update(@Param('id') movieId: number, @Body() updatedData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updatedData);
  }
}
