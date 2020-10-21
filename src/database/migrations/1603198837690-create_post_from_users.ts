import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPostFromUsers1603198837690 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "posts_from_users",
        columns: [
          {
            name: "id_post",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "id_user",
            type: "integer",
          },
          {
            name: "post_image",
            type: "varchar",
          },
          {
            name: "post_text",
            type: "text",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("posts_from_users");
  }
}
