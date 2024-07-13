import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  meal1: string;

  @Column()
  meal2: string;

  @Column({ nullable: true })
  selectedMeal: string;
}
