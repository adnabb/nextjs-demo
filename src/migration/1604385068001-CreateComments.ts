import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateComments1604385068001 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(new Table({
      name: 'comments',
      columns: [
        {name: 'id', type: 'int', isGenerated: true, generationStrategy: 'increment', isPrimary: true},
        {name: 'auther_id', type: 'int'},
        {name: 'post_id', type: 'int'},
        {name: 'content', type: 'text'}
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable('comments')
  }

}
