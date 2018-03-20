import { Module} from '@nestjs/common';
import { AdminController } from "./controllers";

@Module({
  imports: [],
  controllers: [
    AdminController
  ],
  components: []
})

export class AdminModule {}
