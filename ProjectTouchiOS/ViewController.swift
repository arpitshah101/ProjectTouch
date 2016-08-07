//
//  ViewController.swift
//  ProjectTouchiOS
//
//  Created by Qasim Abbas on 8/6/16.
//  Copyright © 2016 Qasim Abbas. All rights reserved.
//

import UIKit



class ViewController: UIViewController, UICollectionViewDelegate, UICollectionViewDataSource {
    var sampleData : [String] = ["1", "2", "3"]
    private let reuseIdentifier = "sampleCell"
    
    @IBOutlet weak var slideBar: UISlider!
    
    @IBOutlet weak var compCollection: UICollectionView!

    

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.

        
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    //1
    func numberOfSectionsInCollectionView(collectionView: UICollectionView) -> Int {
        return 1
    }
    
    //2
    func collectionView(collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return sampleData.count
    }
    
    //3
    func collectionView(collectionView: UICollectionView, cellForItemAtIndexPath indexPath: NSIndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCellWithReuseIdentifier(reuseIdentifier, forIndexPath: indexPath) 
        cell.backgroundColor = UIColor.redColor()

        // Configure the cell
    
        
        return cell
    }

}

