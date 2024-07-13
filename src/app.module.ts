import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meal } from './meal/meal.entity';
import { MealService } from './meal/meal.service';
import { MealController } from './meal/meal.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sS111222333s',
      database: 'db_calendar',
      entities: [Meal],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Meal]),
  ],
  controllers: [MealController],
  providers: [MealService],
})
export class AppModule {}
