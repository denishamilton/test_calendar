import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MealService } from './meal.service';

@Controller('meals')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Get()
  findAll() {
    return this.mealService.findAll();
  }

  @Post(':id/select')
  selectMeal(@Param('id') id: number, @Body('selectedMeal') selectedMeal: string) {
    return this.mealService.selectMeal(id, selectedMeal);
  }
}
