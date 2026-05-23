import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {

    // ! aponta a informação de que a propriedade será dada depois apesar de ser obrigatória
    
    @Prop()
    title!: string;

    @Prop()
    description!: string;

    @Prop({ default: false })
    status!: boolean;

    @Prop({ default: Date.now })
    createdAt!: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);