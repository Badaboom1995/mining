import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { AddContactDto, RemoveFromContactsDto } from '../dto/contacts.dto';
import { ContactsService } from '../services';
import { NotificationsService } from '../../notifications/services';
import { APISuccess, APIError } from '../../../helpers';

@ApiUseTags('contacts')
@Controller('contacts')
export class ContactsController {
  constructor(
    private readonly contactsService: ContactsService,
    private readonly notificationsService: NotificationsService,
  ) {}

  @Post('/add')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Add contact to list' })
  async addToContacts(
    @Req() req,
    @Res() res,
    @Body() AddContactDto: AddContactDto,
  ) {
    try {
      await this.contactsService.addContact(req.user.id, AddContactDto);
      await this.notificationsService.insertNotification(req.user.id, AddContactDto);
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/remove')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Remove contact from contacts list' })
  async removeFromContacts(
    @Req() req,
    @Res() res,
    @Body() RemoveFromContactsDto: RemoveFromContactsDto,
  ) {
    try {
      await this.contactsService.removeFromContacts(
        RemoveFromContactsDto,
        req.user.id,
      );
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/search')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Search users in contacts list' })
  async searchContacts(@Req() req, @Res() res, @Body('param') param: string) {
    try {
      const data = await this.contactsService.searchContacts(param);
      return res.send(new APISuccess(data));
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/list')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get contacts list' })
  async getContactsList(@Req() req, @Res() res) {
    try {
      const data = await this.contactsService.getContactsList(req.user.id);
      return res.send(new APISuccess(data));
    } catch (err) {
      return res.send(new APIError(err));
    }
  }
}
