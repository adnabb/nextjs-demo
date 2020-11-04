import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameUserId1604459269542 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('comments', 'authorId', 'userId')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('comments', 'userId', 'authorId')
    }

}
