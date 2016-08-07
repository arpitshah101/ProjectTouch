//
//  Selection.swift
//  ProjectTouchiOS
//
//  Created by Qasim Abbas on 8/7/16.
//  Copyright © 2016 Qasim Abbas. All rights reserved.
//

import UIKit

class Selection: UIViewController, UICollectionViewDelegate,
UICollectionViewDataSource{
    var arrData : [String] = ["1","2","3","4", "5", "6"]
    private let reuseIdentifier = "showCell"
    func numberOfSectionsInCollectionView(collectionView: UICollectionView) -> Int {
        return 1
    }
    @IBOutlet weak var compCollection: UICollectionView!
    @IBAction func swipeUp(sender: AnyObject) {
        self.performSegueWithIdentifier("nextSegue", sender: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()

    }
    
    func collectionView(collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return arrData.count
    }
    
    func collectionView(collectionView: UICollectionView, cellForItemAtIndexPath indexPath: NSIndexPath) -> UICollectionViewCell {
         let cell = collectionView.dequeueReusableCellWithReuseIdentifier(reuseIdentifier, forIndexPath: indexPath)
        
        return cell
    }
    
    func  collectionView(collectionView: UICollectionView, didSelectItemAtIndexPath indexPath: NSIndexPath) {
        let cell = compCollection.cellForItemAtIndexPath(indexPath)
        cell?.frame = CGRectMake(((cell?.frame.origin.x)!), ((cell?.frame.origin.y)!) - 20, cell!.frame.width, (cell?.frame.height)!)
    }
    
    func  collectionView(collectionView: UICollectionView, didDeselectItemAtIndexPath indexPath: NSIndexPath) {
        let cell = compCollection.cellForItemAtIndexPath(indexPath)
        cell?.frame = CGRectMake(((cell?.frame.origin.x)!), ((cell?.frame.origin.y)!) + 20, cell!.frame.width, (cell?.frame.height)!)
    }

    
}
