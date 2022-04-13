import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';
import { DatabaseModule } from 'src/database/database.module';
import { MessagingModule } from 'src/messaging/messaging.module';
import { CustomersServices } from 'src/services/customers.service';
import { ProductsServices } from 'src/services/product.service';
import { PurchasesServices } from 'src/services/purchases.service';
import { CustomersResolver } from './graphql/resolvers/customers.resolver';
import { ProductResolver } from './graphql/resolvers/products.resolver';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    MessagingModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductResolver,
    PurchasesResolver,
    CustomersResolver,

    ProductsServices,
    PurchasesServices,
    CustomersServices,
  ],
})
export class HttpModule {}
