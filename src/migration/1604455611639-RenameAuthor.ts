import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameAuthor1604455611639 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('posts', 'auther_id', 'author_id')
        await queryRunner.renameColumn('comments', 'auther_id', 'author_id')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('posts', 'author_id', 'auther_id')
        await queryRunner.renameColumn('comments', 'author_id', 'auther_id')
 
    }

}
