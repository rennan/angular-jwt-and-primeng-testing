import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    ToastModule,
    CardModule,
  ],
})
export class PrimengModule {}
