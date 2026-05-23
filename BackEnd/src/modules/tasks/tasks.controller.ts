import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    
    constructor(private readonly tasksService: TasksService){}

    @Get()
    findAll() {
    return this.tasksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
    }

    // @Get('/:status')
    // findTaskByStatus(@Param('status') status: boolean){
    //     return this.tasksService.findTaskByStatus(status);
    
    // }
    
    @Post()
    createTask(@Body() data: any){
        return this.tasksService.createTask(data);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: any) {
    return this.tasksService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
    }
}
