import { Module} from '@nestjs/common';
import { AdminController } from "./controllers";
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    OrderModule
  ],
  controllers: [
    AdminController
  ],
  components: []
})

export class AdminModule {}
