import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './tasks.schema';

@Injectable()
export class TasksService {

    constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>,
    ) {}

    async findAll() {
    return this.taskModel.find();
}

    // public findTaskByStatus(status: boolean){
    //     return this.findAllTasks().filter(task => task.finished === status);
    // }

    async findOne(id: string) {
    return this.taskModel.findById(id);
}
    
    async createTask(data: any) {
    return this.taskModel.create(data);
}

    async update(id: string, data: any) {
    return this.taskModel.findByIdAndUpdate(id, data, { new: true });
    }

    async remove(id: string) {
    return this.taskModel.findByIdAndDelete(id);
    }

}
