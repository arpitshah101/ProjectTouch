
//
//  DisplayImage.swift
//  ProjectTouchiOS
//
//  Created by Qasim Abbas on 8/7/16.
//  Copyright © 2016 Qasim Abbas. All rights reserved.
//

import UIKit


class DisplayImage: UIViewController {
    @IBOutlet weak var imageVeiw: UIImageView!
    var imageName :String!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        imageVeiw.image = UIImage(named: imageName)
        
        
    }
    
    
}
