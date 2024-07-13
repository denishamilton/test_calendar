import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meal } from './meal.entity';

@Injectable()
export class MealService {
  constructor(
    @InjectRepository(Meal)
    private mealRepository: Repository<Meal>,
  ) {}

  findAll(): Promise<Meal[]> {
    return this.mealRepository.find();
  }

  findOne(id: number): Promise<Meal> {
    return this.mealRepository.findOneBy({ id });
  }

  async selectMeal(id: number, selectedMeal: string): Promise<Meal> {
    const meal = await this.mealRepository.findOneBy({ id });
    meal.selectedMeal = selectedMeal;
    return this.mealRepository.save(meal);
  }
}
