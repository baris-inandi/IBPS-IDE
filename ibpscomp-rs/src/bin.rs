use std::env;
use std::fs;
use std::process::exit;

fn main() {
    let filepath = env::args().nth(1).unwrap_or_else(|| {
        println!("Please specify a file path");
        exit(1)
    });

    let contents = &fs::read_to_string(&filepath).unwrap_or_else(|_| {
        eprintln!("No such file or directory");
        exit(1)
    });

    let pycode = ibps::ibps_to_py(contents);

    println!("{}", pycode);
}
