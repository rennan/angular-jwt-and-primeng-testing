import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';
@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    ToastModule,
  ],
})
export class PrimengModule {}
