import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

//Decorator: Decorator can add functionality to the class
//It's a function on top of the class.
@Module({
  imports: [],
  //Controllers take URLs and execute functions(Controller takes requests to URL), It is like a router from express.js
  controllers: [MoviesController],
  //Providers are in charge of executing the business logic(Thing that actually has functions)
  providers: [],
})
export class AppModule {}
