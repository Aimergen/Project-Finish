import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Wishlist } from './entities/wishlist.entity';
import { Model } from 'mongoose';

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(Wishlist.name) private readonly wishlistModel: Model<Wishlist>,
  ) {}
  async create(createWishlistDto: CreateWishlistDto) {
    console.log(createWishlistDto);
    return await this.wishlistModel.create(createWishlistDto);
  }

  async findAll() {
    return await this.wishlistModel.find();
  }
  async findMyWishlist(customerId: string) {
    return await this.wishlistModel.find({ customerId: customerId });
  }

  async findOne(_id: string, customerId: string) {
    return await this.wishlistModel.findOne({ _id, customerId });
  }

  update(id: number, updateWishlistDto: UpdateWishlistDto) {
    return `This action updates a #${id} wishlist`;
  }

  async remove(_id: string, userId: string) {
    return await this.wishlistModel.findOneAndDelete({ _id, userId });
  }
}
