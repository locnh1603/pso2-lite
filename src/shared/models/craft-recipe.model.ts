import { ApiProperty } from "@nestjs/swagger";

export class CraftRecipe {
  @ApiProperty({type: String})
  resourceId: string;
  @ApiProperty({type: String})
  resourceName: string;
  @ApiProperty({type: Number})
  amount: number;
}