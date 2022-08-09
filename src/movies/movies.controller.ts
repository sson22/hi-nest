import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

//Controls the entrypoint => localhost:3000/movies
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: number) {
    return `We are searching for a movie with year after ${searchingYear}`;
  }
  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie with id:${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will remove movie with id: ${movieId}`;
  }

  @Patch(':id')
  update(@Param('id') movieId: string, @Body() updatedData) {
    return {
      updatedMovie: movieId,
      ...updatedData,
    };
  }
}
