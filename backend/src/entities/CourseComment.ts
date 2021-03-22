import { ObjectType, Field } from "type-graphql";
import { Entity, Column, PrimaryColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Course } from "./Course";

@ObjectType()
@Entity()
export class CourseComment extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id!: string;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column({ default: 0 })
  score: number;

  @Field(() => Course)
  @ManyToOne(() => Course, (course) => course.comments, {
    onDelete: "CASCADE",
  })
  course: Course;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
