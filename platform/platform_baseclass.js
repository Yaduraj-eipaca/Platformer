class PLATFORM{
    constructor(pos_X,pos_Y,height, width,variable_name)
    {
        this.height = height;
        this.width = width;
        this.posX = pos_X
        this.pos_Y = pos_Y;
        this.variable_name = variable_name;
    }

    platform_SPAWN()
    {
        ground = createSprite(this.posX,this.pos_Y,this.height,this.width,this.variable_name);
    }
}