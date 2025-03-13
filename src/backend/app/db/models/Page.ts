import { Schema, Types, model } from 'mongoose';

export interface IPage {
  _id: Types.ObjectId;
  number: number;
  book: Types.ObjectId;
  content: string;
}

export const PageSchema = new Schema<IPage>({
  number: Number,
  book: { type: Schema.Types.ObjectId, ref: 'Book' },
  content: String,
});

export const Page = model<IPage>('Page', PageSchema);
