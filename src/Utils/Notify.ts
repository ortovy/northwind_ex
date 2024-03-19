import { Notyf } from "notyf";

class Notify {
	private notyf = new Notyf({
        duration:4000,
        position:{x:"center",y:"top"},
        dismissible:true

    })
    public success(msg: string):void{
        this.notyf.success(msg);
    }
    public error(err: any): void{
        const msg = this.extractMessage(err);
        this.notyf.error(msg);
    }

    private extractMessage(err: any): string{
        if(typeof err === "string" ) return err;

        if (typeof err?.response?.data === "string") return err.response.data;

        if(typeof err?.message ==="string") return err.message;

        return "Some error, please try again."
    }
}

export const notify = new Notify();
