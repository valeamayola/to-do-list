import {z} from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Título es requerido'
    }),
    description: z.string({
        required_error: 'Descripción es requerida'
    }),
    date: z.string().datetime().optional(),
});