import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

// export class Product {}

@Schema({ timestamps: true })
export class Wishlist {
  @Prop({ default: () => nanoid() })
  _id: string;
  @Prop()
  name: string;
  @Prop()
  price: number;
  @Prop()
  productId: string;
  @Prop()
  productImageSrc: string;
  @Prop()
  customerId: string;
  @Prop()
  createdAt: Date;
  updatedAt: Date;
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);
