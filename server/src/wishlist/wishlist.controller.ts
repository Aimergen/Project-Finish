import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  create(@Body() createWishlistDto: CreateWishlistDto) {
    return this.wishlistService.create(createWishlistDto);
  }

  @Get()
  findAll() {
    return this.wishlistService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.wishlistService.findOne(+id);
  // }
  @Get(':_id')
  findOne(
    @Param('_id') productId: string,
    @Query('customerId') customerId: string,
  ) {
    return this.wishlistService.findOne(productId, customerId);
  }
  @Get('mywishlist/:id')
  findMyWishlist(@Param('id') customerId: string) {
    return this.wishlistService.findMyWishlist(customerId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWishlistDto: UpdateWishlistDto,
  ) {
    return this.wishlistService.update(+id, updateWishlistDto);
  }

  @Delete(':_id')
  async remove(
    @Param('_id') productId: string,
    @Body('customerId') customerId: string,
  ): Promise<any> {
    return this.wishlistService.remove(productId, customerId);
  }
}
