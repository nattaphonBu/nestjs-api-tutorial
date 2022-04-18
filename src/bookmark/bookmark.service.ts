import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  getBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }

  getBookmarkById(userId: number, bookmarkId: number) {
    return this.prisma.bookmark.findFirst({
      where: {
        id: bookmarkId,
        userId,
      },
    });
  }

  async createBookmark(userId: number, dto: CreateBookmarkDto) {
    const bookmark = await this.prisma.bookmark.create({
      data: {
        ...dto,
        userId,
      },
    });
    return bookmark;
  }

  async editBookmark(userId: number, dto: EditBookmarkDto, bookmarkId: number) {
    //get bookmark by id
    const bookmark = await this.prisma.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });
    if (!bookmark || bookmark.userId != userId) {
      throw new ForbiddenException('Access to resources denied');
    }
    // check if user owns the book mark
    return await this.prisma.bookmark.update({
      where: {
        id: bookmarkId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteBookmark(userId: number, bookmarkId: number) {
    //get bookmark by id
    const bookmark = await this.prisma.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });
    if (!bookmark || bookmark.userId != userId) {
      throw new ForbiddenException('Access to resources denied');
    }
    // check if user owns the book mark
    return await this.prisma.bookmark.delete({
      where: {
        id: bookmarkId,
      },
    });
  }
}
