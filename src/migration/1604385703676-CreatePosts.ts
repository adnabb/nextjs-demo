import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePosts1604385703676 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(new Table({
      name: 'posts',
      columns: [
        { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
        { name: 'title', type: 'varchar' },
        { name: 'content', type: 'text' },
        { name: 'auther_id', type: 'int' }
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable('posts')
  }

}
